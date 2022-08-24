const Video = () => {
  return (
    <div className="modal fade" id="videoModal" tabindex="-1" role="dialog">
      <div
        role="document"
        className="modal-dialog modal-lg modal-dialog-centered"
      >
        <div className="modal-content bg-transparent border-0">
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="modal"
            className="btn-close btn-close-white ms-auto me-n3"
          ></button>
          <div className="modal-body p-0">
            <div className="ratio ratio-16x9">
              <iframe
                id="video"
                title="title"
                allowfullscreen
                allow="autoplay;"
                src="https://www.youtube.com/embed/7e90gBu4pas"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
