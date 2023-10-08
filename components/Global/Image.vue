<script setup>
    const props = defineProps(['src']);
    const editable = ref(false);
    const newSrc = ref(props.src);

    import { useBodyStore } from '~/stores/body';
    const emailBody = useBodyStore();
</script>

<template>
    <tr class="email__block">
        <td style="padding:0;">
            <div class="block__actions">
                <div class="handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteBlock')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="center" style="padding: 0 42px 0 43px;">

                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:16px 0 0 0; vertical-align:top;">

                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                <img :src="newSrc" width="515" style="border:none;display:block; max-width:515px; outline:0; width:100%; height: auto;">
                                                <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editSrc', newSrc)">
                                                    <label for="imgSrc" style="font-size: 15px !important;">Ссылка на картинку (не более 500кб)<br><span style="font-size: 12px;">Все изображения должны размещаться на сервисе <a href="https://pic.mos.ru/app/filebrowser/login?redirect=%2Ffiles%2F" target="_blank" style="color: #ff0000; text-decoration: underline;">pic.mos.ru</a></span></label>
                                                    <div class="edit__form-inputs">
                                                        <input type="text" v-model="newSrc" id="imgSrc">
                                                        <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>


                                    </table>

                                </th>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>
