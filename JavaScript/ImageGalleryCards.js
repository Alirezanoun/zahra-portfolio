const ImageGalleryCards = arrayOfData => {
	return arrayOfData
		.map(item => {
			const { image, title, description } = item

			return `
      <section>
        <div class="image">
          <div class="zoom-in">
            <img class="photo-grid" src="${image}" data-aos="fade-in" data-aos-duration="1000" />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">${title}</div>
              <span class="divider"></span>
              <p class="image__description">${description}</p>
            </div>
          </div>
        </div>
      </section>
      `
		})
		.join('')
}

export default ImageGalleryCards
