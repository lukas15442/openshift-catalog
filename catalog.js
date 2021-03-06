// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
    // Required. Must be unique.
    id: "hda",
    // Required
    label: "Hochschule Darmstadt",
    subCategories: [
      {
        // Required. Must be unique.
        id: "hdapad",
        // Required.
        label: "PAD",
        // Required. Items matching any tag will appear in this subcategory.
        tags: [
          "hda",
          "hdapad"
        ]
      }
    ]
  });
