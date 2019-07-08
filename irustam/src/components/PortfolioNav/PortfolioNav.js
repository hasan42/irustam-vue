export default {
    name: 'PortfolioNav',
    props: ['companys', 'selectfn'],
    data: function () {
        return {
            active: 'all'
        }
    },
    methods: {
        setActive: function (tag) {
            this.active = tag;
        }
    }
}
