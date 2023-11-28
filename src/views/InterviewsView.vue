<template>
  <div>
    <interviews-list />
    <interview-creator />
  </div>
</template>

<script>
import InterviewCreator from '@/components/InterviewCreator.vue'
import InterviewsList from '@/components/InterviewsList'

export default {
  name: 'InterviewsView',

  components: {
    InterviewsList,
    InterviewCreator,
  },
}
</script>

<style lang="scss" scoped></style>
