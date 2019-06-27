import Modal from '../Modal/Modal.vue'
import EventBus from '../../eventBus';

export default {
    name: 'Header',
    components: {
        Modal
    },
    methods: {
        showContacts: function () {
            EventBus.$emit("openModal");
        }
    }
}