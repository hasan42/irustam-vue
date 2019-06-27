import EventBus from '../../eventBus';

export default {
    name: 'Modal',
    data() {
        return {
            visible: false
        };
    },
    created() {
        EventBus.$on("openModal", () => {
            this.visible = true;
            document.body.classList.add('modal-open');
        });
    },
    methods: {
        close: function () {
            this.visible = false;
            document.body.classList.remove('modal-open');
        }
    }
}
