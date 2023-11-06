<template>
    <BaseCard>
        <h2>Find your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" checked id="frontend" @change="setFilter"/>
            <label for="frontend">Front End</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" checked id="backend" @change="setFilter"/>
            <label for="backend">Back End</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" checked id="career" @change="setFilter"/>
            <label for="career">Career</label>
        </span>
    </BaseCard>
</template>

<script>
export default {
    data:()=>({
        filters:{
            frontend:true,
            backend:true,
            career:true
        }
    }),
    methods:{
        setFilter(event){
            const inputId = event.target.id;
            const isActive  = event.target.checked;
            const updatedFilter = {
                ...this.filters,
                [inputId]:isActive
            };
            this.filters = updatedFilter;
            this.$emit('changeFilter',updatedFilter)
        }
    },
    emits:['']
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>