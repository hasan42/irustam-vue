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
            active: '',
            allproject: '',
            project: ''
        };
    },
    mounted: function () {
        axios.get('company.json')
            .then(response => (this.company = response.data))
            .catch(error => console.log(error));
        axios.get('portfolio.json')
            .then(response => {
                this.allproject = response.data;
                this.project = this.allproject;
            })
            .catch(error => console.log(error));
    },
    methods: {
        select: function (tag) {
            this.active = this.company.filter(d => d.tag === tag);
            if (tag != 'all') {
                this.project = this.allproject.filter(d => d.company === tag);
            } else {
                this.project = this.allproject;
            }
            

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
