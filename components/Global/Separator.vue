<script setup>

</script>

<template>
    <tr style="padding: 0; margin: 0;">
        <td style="padding: 0; margin: 0;">
            <div class="components__actions">
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <table class="spacer" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%;">
                <tbody>
                    <tr><td height="16" style="line-height:16px;height:16px;"></td></tr>
                    <tr style="padding:0;text-align:left;vertical-align:top">
                        <td height="15" style="line-height:15px;margin:0;padding:0;border-top:1px solid #d3d3d3;">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>