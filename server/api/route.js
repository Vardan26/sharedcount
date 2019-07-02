import testRouter from './test/route';

testRouter.get('/', function(req, res) {
    res.redirect('/test');
});
