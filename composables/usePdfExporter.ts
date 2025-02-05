import { ref, onMounted } from 'vue';

const pdfSection = ref<HTMLElement | null>(null);
let html2pdf: any = null;

export function usePdfExporter() {
  onMounted(async () => {
    if (import.meta.client) {
        html2pdf = (await import('html2pdf.js')).default;
      }   
  });

  const handleExport = (filename: string) => {
    if (!pdfSection.value || !html2pdf) return;

    const element = pdfSection.value;
    const opt = {
      margin: 10,
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .toPdf()
      .get('pdf')
      .then((pdf: { internal: { scaleFactor: number } }) => {
        pdf.internal.scaleFactor = 1.5;
      })
      .save();
  };

  return { pdfSection, handleExport };
}
