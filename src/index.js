import SlotMachine from "./SlotMachine.vue";

export { SlotMachine }

export default {
    install(Vue, options) {
        Vue.component("slot-machine", SlotMachine);
    }
};