<script setup lang="ts">
import Container from '@/components/app/card/Container.vue'
import CookieSettings from '@/components/app/card/CookieSettings.vue'
import CreateAccount from '@/components/app/card/CreateAccount.vue'
import DatePickerCard from '~/components/app/card/DatePickerCard.vue'
import GitHubCard from '@/components/app/card/GitHubCard.vue'
import Notifications from '@/components/app/card/Notifications.vue'
import PaymentMethod from '@/components/app/card/PaymentMethod.vue'
import ReportAnIssue from '@/components/app/card/ReportAnIssue.vue'
import ShareDocument from '@/components/app/card/ShareDocument.vue'
import TeamMembers from '@/components/app/card/TeamMembers.vue'
</script>

<template>
  <div
    class="grid items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3"
  >
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <Container>
        <CreateAccount />
      </Container>
      <Container>
        <PaymentMethod />
      </Container>
    </div>
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <Container>
        <TeamMembers />
      </Container>
      <Container>
        <ShareDocument />
      </Container>
      <Container>
        <DatePickerCard />
      </Container>
      <Container>
        <Notifications />
      </Container>
    </div>
    <div
      class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1"
    >
      <Container>
        <ReportAnIssue />
      </Container>
      <Container>
        <GitHubCard />
      </Container>
      <Container>
        <CookieSettings />
      </Container>
    </div>
  </div>
</template>
