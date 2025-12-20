import { useRouter } from 'next/router';

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 capitalize text-white">
          {service ? service.replace(/-/g, ' ') : 'Service'}
        </h1>
        <p className="text-white/60">
          Detailed information about this service will be available shortly.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
