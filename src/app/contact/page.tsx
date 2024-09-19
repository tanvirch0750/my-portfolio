import ContactForm from '@/components/ContactForm';
import PageContainer from '@/components/layout/PageContainer';

export default function ContactPage() {
  return (
    <PageContainer scrollable={true}>
      <ContactForm />
    </PageContainer>
  );
}
