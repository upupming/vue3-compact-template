<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>
    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>
      <slot />
    </div>
  </div>
</template>

<style>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #2c3e50;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item {
  display: flex;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

.item::before {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item::after {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:first-of-type::before {
  display: none;
}

.item:last-of-type::after {
  display: none;
}

</style>
