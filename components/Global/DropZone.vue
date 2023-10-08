<script setup>
    import { useBodyStore } from '~/stores/body';
    
    const emailBody = useBodyStore();
</script>

<template>
    <tr v-if="emailBody.body.length < 3" style="position: relative;">
        <td>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="center" style="padding: 13px 42px 0 43px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:0; vertical-align:top; background-color: rgba(255, 0, 0, 0.1); border: dashed #ff0000; border-radius: 32px;">

                                    <table width="100%" height="300" cellpadding="0" cellspacing="0">
                                   
                                        <tr>
                                       
                                            <td align="center" valign="middle" style="padding:0; color:#808080; font-size:15px; font-weight:500; font-family:'Helvetica', Arial, sans-serif;">
                                                <img src="https://pic.mos.ru/srv/images/0ca51d73459f5105e85339fff3a6c114.png" width="50" alt="" style="-ms-interpolation-mode:bicubic;border:0;display:block;outline:0;text-decoration:none;width:50px;height: 50px; margin-bottom: 20px;">
                                                Перетащите сюда элементы для создания шаблона<br>или загрузите готовый шаблон в формате <b>txt</b>
                                                <div style="margin-top: 20px;">
                                                    <label for="dropzoneFile" style="text-decoration: underline;">Загрузить</label>
                                                    <input type="file" ref="file" id="dropzoneFile" class="dropZoneFiles" @change="emailBody.readFile()" style="display: none;">
                                                </div>
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

<style lang="scss" scoped>

</style>