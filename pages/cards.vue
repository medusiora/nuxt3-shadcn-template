<script setup lang="ts"></script>

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
        <DatePicker />
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
