export default {
    name: 'PortfolioAbout',
    props: ['info'],
    filters: {
        textDate: function (value) {
            if (!value) return ''
            let d = new Date(value)
            if (!isNaN(d)) {
                let options = {
                    year: 'numeric',
                    month: 'long',
                };
                return d.toLocaleString("ru", options).toString().slice(0, -3)
            } else {
                return 'наст. время'
            }
        }
    }
}
