import axios from 'axios'
import PortfolioAbout from '../PortfolioAbout/PortfolioAbout.vue'
import PortfolioNav from '../PortfolioNav/PortfolioNav.vue'
import PortfolioList from '../PortfolioList/PortfolioList.vue'
import PortfolioFilter from '../PortfolioFilter/PortfolioFilter.vue'

export default {
    name: 'Portfolio',
    components: {
        PortfolioAbout,
        PortfolioNav,
        PortfolioList,
        PortfolioFilter
    },
    data() {
        return {
            company: '',
            active: ''
        };
    },
    mounted: function () {
        axios.get('company.json')
            .then(response => (this.company = response.data))
            .catch(error => console.log(error));
    },
    methods: {
        select: function (tag) {
            this.active = this.company.filter(d => d.tag === tag);

            /*axios.get('company.json')
                .then(response => {
                    (this.active = response.data.filter(d => d.tag === tag));
                    console.log(this.active)
                })
                .catch(error => console.log(error));
            console.log(tag);*/
        }
    }
}
