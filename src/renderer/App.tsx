import Layout from './components/Layout';
import CheckIn from './components/CheckIn';
import JournalForm from './components/JournalForm';

export default function App() {
  return (
    <Layout>
      <CheckIn />
      <JournalForm />
    </Layout>
  );
}
