<script setup>
    // Props
    const props = defineProps(['src']);

    // Toggle edit panel
    const editable = ref(false);

    // New Src
    const newSrc = ref(props.src);
</script>

<template>
    <tr class="email__block">
        <td style="padding:0;">

            <!-- Block Actions -->
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
            <!-- End of Block Actions -->

            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="left" style="padding: 0;">
    
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="center" style="padding:13px 0 0 0; color:#ff0000; font-size:15px; font-weight:600; font-family:'Helvetica', Arial, sans-serif;">

                                    <!-- Block src -->
                                    <img :src="newSrc" width="515" alt="" style="-ms-interpolation-mode:bicubic;border:0;display:block;max-width:515px;outline:0;text-decoration:none;width:100%;height: auto;">
                                    <!-- End of Block src -->

                                    <!-- Edit panel  -->
                                    <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editSrc', newSrc)">
                                        <label for="imgSrc">Ссылка на картинку (не более 1мб)<br><span style="font-size: 12px;">Все изображения должны размещаться на сервисе <a href="https://pic.mos.ru/app/filebrowser/login?redirect=%2Ffiles%2F" target="_blank" style="color: #ff0000; text-decoration: underline;">pic.mos.ru</a></span></label>
                                        <div class="edit__form-inputs">
                                            <input type="text" v-model="newSrc" id="imgSrc">
                                            <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                                        </div>
                                    </form>
                                    <!-- End of Edit panel -->

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>

        </td>
    </tr>
</template>
