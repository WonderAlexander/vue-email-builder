<script setup>

    const props = defineProps(['space']);
    const editable = ref(false);
    const inervalHeight = ref(props.space);
</script>

<template>
    <tr>
        <td class="s_block" bgcolor="#f7f7f7" align="left" valign="middle" :style="{ paddingTop: inervalHeight + 'px'}">
            <div class="components__actions">
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editSpace', inervalHeight)">
                <label for="imgSrc">Размер вертикального отступа</label>
                <div class="edit__form-inputs">
                    <input type="number" v-model="inervalHeight">
                    <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                </div>
            </form>
        </td>
    </tr>
</template>

<style lang="scss" scoped>

</style>