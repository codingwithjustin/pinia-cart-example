<template>
  <div class="container">
    <Card>
      <h4>Add new item</h4>
      <!-- Create new item -->
      <AddItem />
    </Card>
    <Card>
      <h4>Your items ({{ cart.itemsCount }})</h4>
      <ItemsList />
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import AddItem from '@/components/AddItem.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useCartStore } from '@/store/cart'

export default defineComponent({
  components: { Card, AddItem, ItemsList },
  setup() {
    const cart = useCartStore()
    return { cart }
  }
})
</script>
