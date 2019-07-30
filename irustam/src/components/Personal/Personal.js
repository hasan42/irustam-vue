import axios from 'axios'

export default {
    name: 'Personal',
    data() {
        return {
            personalInfo: [{
                info: ''
            }]
        };
    },
    mounted: function () {
        axios.get('personal.php')
            .then(response => {
                this.personalInfo = response.data.filter(d => d.active === '1');
            } )
            .catch(error => console.log(error));
        
    },
}
