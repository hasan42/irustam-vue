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
            project: '',
            count: []
        };
    },
    mounted: function () {
        axios.get('company.php')
            .then(response => (this.company = response.data))
            .catch(error => console.log(error));
        axios.get('portfolio.php')
            .then(response => {
                this.allproject = response.data;
                this.project = this.allproject;
                this.calcCount();
            })
            .catch(error => console.log(error));
    },
    methods: {
        select: function (tag) {
            this.active = this.company.filter(d => d.tag === tag);
            if (tag != 'all') {
                this.project = this.allproject.filter(d => d.company === tag);
                this.calcCount();
            } else {
                this.project = this.allproject;
                this.calcCount();
            }
            /*axios.get('company.json')
                .then(response => {
                    (this.active = response.data.filter(d => d.tag === tag));
                    console.log(this.active)
                })
                .catch(error => console.log(error));
            console.log(tag);*/
        },

        calcCount: function () {
            let countDesign = this.project.filter(d => d.design === '1').length;
            let countFrontend = this.project.filter(d => d.frontend === '1').length;
            let countSupport = this.project.filter(d => d.support === '1').length;
            return this.count = [countDesign, countFrontend, countSupport];
        }
    }
}
