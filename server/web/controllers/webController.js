export default class WebController {
    getViewFaq(req, res) {
        res.render('faq', {
            user: 'Vardan'
        });
    }
    getViewHomepage(req, res) {
        res.render('homepage', {
            user: 'Vardan'
        });
    }
    getViewApiDocs(req, res) {
        res.render('api-docs', {
            user: 'Vardan'
        });
    }
    getViewApiPolicy(req, res) {
        res.render('policy', {
            user: 'Vardan'
        });
    }
    getViewApiPricing(req, res) {
        res.render('pricing', {
            user: 'Vardan'
        });
    }
}
