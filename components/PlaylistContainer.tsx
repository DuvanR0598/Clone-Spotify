interface PlaylistContainerProps {
  name: string;
}

import { PlaylistCard } from './PlaylistCard';

const PlaylistContainer = ({ name }: PlaylistContainerProps) => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex justify-between'>
        <span className='text-white text-2xl font-bold'>{name}</span>
        <span>Show all</span>
      </div>
      <div className='flex gap-3'>
        <PlaylistCard
          image='/images/tth.jpeg'
          tittle='Today´s top hits'
          description='Jung kook is on too of the Hottest 50!'
        />
        <PlaylistCard
          image='/images/all-out.jpeg'
          tittle='All Out 2010s'
          description='The biggest songs of the 2010s'
        />
      </div>
    </section>
  );
};

export { PlaylistContainer };
