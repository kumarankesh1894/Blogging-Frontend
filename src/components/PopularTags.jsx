import React from 'react';
import { useTagsQuery } from '../hooks';

function PopularTags() {
  const {
    isTagsLoading,
    tags,
    tagsError,
  } = useTagsQuery();

  // Check if tags is an array and is available
  function content() {
    if (!tags || !tags.tags || tags.tags.length === 0) {
      return <p>No tags available.</p>;
    }

    return tags.tags.map((tag, index) => (
      <span className='tag-pill tag-default' key={index}>
        {tag}
      </span>
    ));
  }

  // Handle loading and error
  if (isTagsLoading) return <div>Loading tags...</div>;
  if (tagsError) return <div>Error loading tags: {tagsError.message}</div>;

  return (
    <div className='sidebar'>
      <p>Popular Tags</p>
      <div className='tag-list'>{content()}</div>
    </div>
  );
}

export default PopularTags;
