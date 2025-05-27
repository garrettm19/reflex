import Layout from './components/Layout';
import CheckIn from './components/CheckIn';
import JournalForm from './components/JournalForm';
import Mascot from './components/Mascot';

export default function App() {
  return (
    <>
      <Mascot />
      <Layout>
        <CheckIn />
        <JournalForm />
      </Layout>
    </>
  );
}
