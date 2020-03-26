<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="left col-sm-8">
          <Countries />
        </div>
        <div class="right col-sm-4">
          <Total />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Countries from "~/components/Countries.vue";
import Total from "~/components/Total.vue";
import News from "~/components/News.vue";

export default {
  components: {
    Header,
    Countries,
    Total,
    News
  },

  data() {
    return {};
  }
};
</script>

<style>
.content {
  margin-top: 30px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1b262c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.left{
  height: 85vh;
  max-height: 85vh;
  overflow-y: scroll;
}

.right{
  height: 85vh;
  max-height: 85vh;
  overflow-y: scroll;
}
</style>
