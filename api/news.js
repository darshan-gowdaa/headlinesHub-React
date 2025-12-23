// Valid categories for NewsAPI
const VALID_CATEGORIES = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({
            status: 'error',
            code: 'methodNotAllowed',
            message: 'Only GET requests are allowed'
        });
    }

    const { category = 'general', page = '1' } = req.query;
    const apiKey = process.env.VITE_API_KEY;

    // Validate API key
    if (!apiKey) {
        return res.status(500).json({
            status: 'error',
            code: 'apiKeyMissing',
            message: 'API key not configured on server'
        });
    }

    // Validate category
    if (!VALID_CATEGORIES.includes(category.toLowerCase())) {
        return res.status(400).json({
            status: 'error',
            code: 'invalidCategory',
            message: `Invalid category. Valid options: ${VALID_CATEGORIES.join(', ')}`
        });
    }

    // Validate page number
    const pageNum = parseInt(page, 10);
    if (isNaN(pageNum) || pageNum < 1 || pageNum > 100) {
        return res.status(400).json({
            status: 'error',
            code: 'invalidPage',
            message: 'Page must be a number between 1 and 100'
        });
    }

    try {
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&apiKey=${apiKey}&page=${pageNum}&pageSize=10`,
            { signal: controller.signal }
        );

        clearTimeout(timeoutId);

        const data = await response.json();

        // Set cache headers for better performance
        res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.status(200).json(data);
    } catch (error) {
        // Handle specific error types
        if (error.name === 'AbortError') {
            return res.status(504).json({
                status: 'error',
                code: 'timeout',
                message: 'Request to news service timed out. Please try again.'
            });
        }

        console.error('News API Error:', error.message);
        res.status(500).json({
            status: 'error',
            code: 'serverError',
            message: 'Failed to fetch news. Please try again later.'
        });
    }
}
