<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card>
    <CardContent class="pt-6">
      <div class="space-y-2">
        <Label for="date" class="shrink-0"> Pick a date </Label>
        <DateRangePicker />
      </div>
    </CardContent>
  </Card>
</template>
