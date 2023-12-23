interface ErrorProps {
  error: { message: string };
  resetErrorBoundary: () => void;
}

export default function Error({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <div>
      오류가 발생했어요!{' '}
      <button onClick={() => resetErrorBoundary()}>
        <strong>다시 불러오기</strong>
      </button>
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    </div>
  );
}
