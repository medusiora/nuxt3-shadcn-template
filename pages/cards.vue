<script setup lang="ts">
import CardContainer from '@/components/app/card/Container.vue'
import CardCookieSettings from '@/components/app/card/CookieSettings.vue'
import CardCreateAccount from '@/components/app/card/CreateAccount.vue'
import CardGitHubCard from '@/components/app/card/GitHubCard.vue'
import CardNotifications from '@/components/app/card/Notifications.vue'
import CardPaymentMethod from '@/components/app/card/PaymentMethod.vue'
import CardReportAnIssue from '@/components/app/card/ReportAnIssue.vue'
import CardShareDocument from '@/components/app/card/ShareDocument.vue'
import CardTeamMembers from '@/components/app/card/TeamMembers.vue'
import CardDatePickerCard from '~/components/app/card/DatePickerCard.vue'

useHead({
  title: 'Cards',
})
</script>

<template>
  <div
    class="grid items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3"
  >
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardCreateAccount />
      </CardContainer>
      <CardContainer>
        <CardPaymentMethod />
      </CardContainer>
    </div>
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardTeamMembers />
      </CardContainer>
      <CardContainer>
        <CardShareDocument />
      </CardContainer>
      <CardContainer>
        <CardDatePickerCard />
      </CardContainer>
      <CardContainer>
        <CardNotifications />
      </CardContainer>
    </div>
    <div
      class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1"
    >
      <CardContainer>
        <CardReportAnIssue />
      </CardContainer>
      <CardContainer>
        <CardGitHubCard />
      </CardContainer>
      <CardContainer>
        <CardCookieSettings />
      </CardContainer>
    </div>
  </div>
</template>
