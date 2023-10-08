<script setup>
    const props = defineProps(['src']);
    const editable = ref(false);
    const newSrc = ref(props.src);
</script>

<template>
    <tr>
        <td class="s_block_0" bgcolor="#f7f7f7" align="left" valign="middle" style="padding: 0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
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
            <table border="0" width="455" cellspacing="0" cellpadding="0" class="row collapse" style="border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt; mso-table-rspace:0pt;mso-table-bspace:0pt;mso-table-tspace:0pt;display:table;padding:0;position:relative;text-align:left;vertical-align:top;border:0; outline:0; width: 100%; max-width: 455px;">
                <tbody>
                    <tr style="padding:0;text-align:left;vertical-align:top">
                        <th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;font-family:Arial, sans-serif;font-size:12px;font-weight:400;line-height:1.5;margin:0 auto;padding:0;text-align:left;width: 100%;">
                            <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%; background:#F7F7F7;">
                                <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                        <th style="margin:0;padding:0;">

                                            <center data-parsed="" style="width:100%"><img :src="newSrc" alt="" align="center" width="455" class="float-center" style="-ms-interpolation-mode:bicubic;Margin:0 auto;clear:both;display:block;float:none;margin:0 auto;outline:0;border:0;outline:0;text-align:center;text-decoration:none;width:100%;height:auto;"></center>
                                            <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editSrc', newSrc)">
                                                <label for="imgSrc">Ссылка на картинку (не более 500кб)<br><span style="font-size: 12px;">Все изображения должны размещаться на сервисе <a href="https://pic.mos.ru/app/filebrowser/login?redirect=%2Ffiles%2F" target="_blank" style="color: #ff0000; text-decoration: underline;">pic.mos.ru</a></span></label>
                                                <div class="edit__form-inputs">
                                                    <input type="text" v-model="newSrc" id="imgSrc">
                                                    <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                                                </div>
                                            </form>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>
