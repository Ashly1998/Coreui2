 <template>
  <CRow>
    <CCol>
      <CMultiSelect
          :multiple="true"
          :search="true"
          :selected="['1']"
          :selection="true"
          optionsEmptyPlaceholder="No options placeholder"
          searchPlaceholder="..."
      >
        <option value="0">enhancement</option>
        <option value="1">bug</option>
        <option value="2">duplicate</option>
        <option value="3">invalid</option>
        <optgroup label="group">
          <option value="4">enhancement2</option>
          <option value="5">bug2</option>
        </optgroup>
      </CMultiSelect>
    </CCol>
    <CCol>
      <CMultiSelect
          :options="options"
          :search="true"
          :selected="[]"
          :selection="true"
          inline
          optionsEmptyPlaceholder="No options placeholder"
          searchPlaceholder="Search"
          selectionType="tags"
      >
      </CMultiSelect>
    </CCol>
  </CRow>
</template>


 <script>
export default {
  name: "MultiSelectExample",
  data() {
    return {
      selected: [
        '1',
        // '1', 'group option 2', '5'
      ],
      options: [
        {
          value: 0,
          text: 'enhancement'
        },
        {
          value: 1,
          text: 'bug',
          // selected: true
        },
        {
          value: 2,
          text: 'duplicate',
          // selected: true
        },
        {
          value: 3,
          text: 'invalid'
        },
        {
          label: 'group',
          options: [
            {
              value: 4,
              text: 'enhancement2'
            },
            {
              value: 5,
              text: 'bug2'
            }
          ]
        }
      ],
    }
  },

}
</script>