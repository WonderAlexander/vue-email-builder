<script setup>
    // Text Editing Library
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';

    // Props
    const props = defineProps(['content']);

    // Toggle edit panel
    const editable = ref(false);

    // New Content
    const newContent = ref(props.content);

    // Toolbar
    const toolBarOptions =   [
        ['bold', 'italic', 'underline', 'strike'],  
        [{ 'color': [] }]
    ];
</script>

<template>
    <tr class="email__block">
        <td style="padding:0;">

            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="center" style="padding: 13px 40px 13px 41px;">
                        
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
                        <!-- End of Block Actions-->

                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:0; vertical-align:top;">

                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                <img src="https://pic.mos.ru/srv/images/fb416e7327fd1369387cf2681d18deb7.png" width="515" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:515px;outline:0;text-decoration:none;width:100%;height: auto;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="s_block" bgcolor="#e9e9e9" align="left" valign="middle" style="padding: 16px 30px 16px 30px; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#e9e9e9;">
                                                <table width="100%" cellpadding="0" cellspacing="0">

                                                    <!-- Block content -->
                                                    <tr>
                                                        <td bgcolor="#e9e9e9" align="left" valign="middle" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#e9e9e9;">
                                                            <p v-html="newContent" style="margin: 0; padding: 0;"></p>
                                                        </td>
                                                        <td bgcolor="#e9e9e9" width="50" align="right" valign="middle" style="width:50px; background:#e9e9e9"><img src="https://pic.mos.ru/srv/images/60da202d207069b9f12c01d66c926095.png" width="28" style="border:0;display:block;width:28px;outline:0;height: auto; padding:0; vertical-align:middle" alt=""></td>
                                                    </tr>
                                                    <!-- End of Block content -->

                                                    <!-- Editable panel -->
                                                    <tr v-if="editable">
                                                        <td>
                                                            <form class="edit__form" @submit="editable = false, $emit('editContent', newContent)">
                                                                <quill-editor v-model:content="newContent" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;"></quill-editor>
                                                                <button type="submit" class="text__change-btn">Сохранить</button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                <!-- End of editable panel -->
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="top" height="14" style="height:14px;line-height:14px; vertical-align:top;">
                                                <img src="https://pic.mos.ru/srv/images/b4c063265f64cae59d1a810aebf5b714.png" width="515" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:515px;outline:0;text-decoration:none;width:100%;height: auto;">
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
