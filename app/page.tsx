import ThemeSwitcher from '../app/components/themeSwitcher/themeSwitcher';

export default function Home(): JSX.Element {
  return (
    <main className='flex items-center justify-center h-screen flex-col'>
      <ThemeSwitcher />
    </main>
  );
}
