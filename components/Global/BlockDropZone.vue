<script setup>
    const props = defineProps(['length']);
</script>

<template>
    <tr class="dropzone" v-if="props.length < 2" style="position: relative;">
        <td>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="center" style="padding: 0;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:0; vertical-align:top; background-color: rgba(255, 0, 0, 0.1); border: dashed #ff0000; border-radius: 12px;">

                                    <table width="100%" height="150" cellpadding="0" cellspacing="0">
                                   
                                        <tr>
                                       
                                            <td align="center" valign="middle" style="padding:0; color:#808080; font-size:15px; font-weight:500; font-family:'Helvetica', Arial, sans-serif;">
                                                <img src="https://pic.mos.ru/srv/images/e786add8d7d61fe10788ab513ce743df.png" width="50" alt="" style="-ms-interpolation-mode:bicubic;border:0;display:block;outline:0;text-decoration:none;width:50px;height: 50px; margin-bottom: 20px;">
                                                Перетащите элементы контента<br>для заполнения блока
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
    .dropzone:hover {
        outline: none !important;
    }
</style>