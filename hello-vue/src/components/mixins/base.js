export const base = {
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        hide: function () {
            this.visible = false;
        },
        show: function () {
            this.visible = true;
        },
        toggle: function () {
            this.visible = !this.visible;
        }

    }
}
