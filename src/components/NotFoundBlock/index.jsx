import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='h-[85vh] flex items-center justify-center '>
      <h1 className="text-white my-8 font-light ">Страница не найдена. Перейти на <Link to="/"><b className="font-bold">главную</b></Link></h1>
    </div>
  )
}

export default index;