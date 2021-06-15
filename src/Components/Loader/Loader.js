import './index.scss';

const load = () => {
  setInterval(() => {
    let k = document.querySelector('.progress');
    let width = 0;
    if (width === 100) {
      clearInterval(load);
    } else {
      width += 15;
      k.style.width = width + 'px';
    }
  }, 2000);
};

const Loader = () => {
  return (
    <div className='loader lg:container lg:mx-auto rounded-lg shadow-md bg-wnite'>
      <div className='uploading py-10 px-8'>
        <h3>Uploading</h3>
        <div className='py-8'>
          <div className='progress-bar'>
            <div className='progress'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
