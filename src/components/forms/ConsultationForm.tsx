import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Phone,
  MessageSquare,
  User,
  IndianRupee,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { ConsultationFormData, MonthlyBillRange, ConsultationSubmissionResult } from '../../types';

interface ConsultationFormProps {
  className?: string;
  sourceContext?: string;
  onSuccessCallback?: (data: ConsultationFormData) => void;
}

/**
 * Isolated API handler for consultation submissions.
 * When integrating with WordPress, replace the simulated response with:
 * fetch('/wp-json/vnsh/v1/consultation', { method: 'POST', body: JSON.stringify(formData) })
 */
export async function submitConsultationLead(
  formData: ConsultationFormData
): Promise<ConsultationSubmissionResult> {
  // Simulate network request latency (600ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  // In demo mode, store in sessionStorage so user/evaluator can inspect submitted leads
  try {
    const existing = JSON.parse(sessionStorage.getItem('vnsh_solar_leads') || '[]');
    const newLead = {
      ...formData,
      leadId: `VNSH-${Date.now().toString().slice(-6)}`,
      submittedAt: new Date().toISOString(),
    };
    existing.unshift(newLead);
    sessionStorage.setItem('vnsh_solar_leads', JSON.stringify(existing));

    return {
      success: true,
      message: 'Consultation request received successfully!',
      leadId: newLead.leadId,
    };
  } catch (err) {
    return {
      success: true,
      message: 'Consultation request received successfully!',
      leadId: `VNSH-${Math.floor(100000 + Math.random() * 900000)}`,
    };
  }
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  className = '',
  sourceContext = 'Hero Form',
  onSuccessCallback,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    whatsappNumber: '',
    monthlyBill: '',
    pincode: '',
    serviceInterest: 'Residential Solar Rooftop',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ConsultationSubmissionResult | null>(
    null
  );
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);

  // Validate form fields according to Indian standards
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    // 1. Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // 2. WhatsApp Number (Indian 10-digit mobile number)
    const cleanPhone = formData.whatsappNumber.replace(/[\s\-\(\)\+]/g, '');
    const indianMobileRegex = /^(?:91)?[6-9]\d{9}$/;
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Please enter your WhatsApp mobile number.';
    } else if (!indianMobileRegex.test(cleanPhone)) {
      newErrors.whatsappNumber =
        'Enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).';
    }

    // 3. Monthly Electricity Bill
    if (!formData.monthlyBill) {
      newErrors.monthlyBill = 'Please select your average monthly electricity bill.';
    }

    // 4. Pincode (Indian 6-digit postal code)
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Please enter your 6-digit area pincode.';
    } else if (!pincodeRegex.test(formData.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit Indian pincode (e.g., 474001 for Gwalior).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error on change
    if (errors[name as keyof ConsultationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitConsultationLead(formData);
      setSubmissionResult(result);
      if (result.success) {
        setSubmittedData({ ...formData });
        if (onSuccessCallback) {
          onSuccessCallback(formData);
        }
      }
    } catch (error) {
      setSubmissionResult({
        success: false,
        message: 'A temporary error occurred. Please try again or call +91 76101 19697.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      whatsappNumber: '',
      monthlyBill: '',
      pincode: '',
      serviceInterest: 'Residential Solar Rooftop',
    });
    setErrors({});
    setSubmissionResult(null);
    setSubmittedData(null);
  };

  // Success State View with Framer Motion Entrance
  if (submissionResult?.success && submittedData) {
    const cleanPhone = submittedData.whatsappNumber.replace(/[\s\-\(\)\+]/g, '');
    const whatsappText = encodeURIComponent(
      `Hello VNSH SunTech! I submitted a solar consultation request (Ref: ${submissionResult.leadId}). Name: ${submittedData.fullName}, Monthly Bill: ${submittedData.monthlyBill}, Pincode: ${submittedData.pincode}. Please advise the next steps.`
    );
    const whatsappLink = `https://wa.me/917610119697?text=${whatsappText}`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF2] shadow-xl text-left ${className}`}
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B2545]">Consultation Booked!</h3>
            <p className="text-xs text-[#637083]">
              Reference ID:{' '}
              <span className="font-mono font-semibold text-[#0B2545]">
                {submissionResult.leadId}
              </span>
            </p>
          </div>
        </div>

        <p className="text-sm text-[#172B45] leading-relaxed mb-6">
          Thank you, <span className="font-semibold">{submittedData.fullName}</span>. Our Gwalior solar team will review your property requirements for pincode{' '}
          <span className="font-semibold">{submittedData.pincode}</span> and reach out to you on WhatsApp at{' '}
          <span className="font-semibold">{submittedData.whatsappNumber}</span>.
        </p>

        {/* Quick WhatsApp Connect with Motion Hover */}
        <div className="space-y-3 mb-6">
          <motion.a
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Connect Immediately on WhatsApp
          </motion.a>

          <a
            href="tel:+917610119697"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#E3EAF2] text-[#0B2545] hover:bg-[#F6F9FC] font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1557A6]" />
            Or Call: +91 76101 19697
          </a>
        </div>

        {/* Demo Notice */}
        <div className="p-3 rounded-lg bg-[#EAF3FC] text-xs text-[#1557A6] leading-relaxed mb-4">
          <strong>Demo Notice:</strong> This submission was simulated and securely recorded in local session storage. In your live WordPress site, it feeds directly into your CRM or WordPress form handler.
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-[#637083] hover:text-[#1557A6] underline transition-colors"
        >
          Book another consultation
        </button>
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF2] shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#1557A6]/30 ${className}`}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B2545]">
            Book Your Free Solar Consultation
          </h3>
        </div>
        <p className="text-sm text-[#637083]">
          Get an expert assessment for your rooftop or commercial solar setup in Gwalior.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div
          className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-in fade-in"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* 1. Full Name with Left User Icon */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-[#637083] pointer-events-none">
              <User className="w-4 h-4" />
            </span>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g., Rajesh Sharma"
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm text-[#172B45] bg-[#F6F9FC] border transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#1557A6]/20 ${
                errors.fullName
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-[#E3EAF2] focus:border-[#1557A6]'
              }`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
          </div>
          <AnimatePresence>
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                id="fullName-error"
                className="mt-1 text-xs text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* 2. WhatsApp Mobile Number with +91 indicator */}
        <div>
          <label
            htmlFor="whatsappNumber"
            className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1.5"
          >
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-xs font-medium text-[#637083] select-none flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#1557A6]" />
              +91
            </span>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              autoComplete="tel"
              required
              disabled={isSubmitting}
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              maxLength={15}
              placeholder="76101 19697"
              className={`w-full pl-16 pr-3.5 py-2.5 rounded-xl text-sm text-[#172B45] bg-[#F6F9FC] border transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#1557A6]/20 font-mono ${
                errors.whatsappNumber
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-[#E3EAF2] focus:border-[#1557A6]'
              }`}
              aria-invalid={errors.whatsappNumber ? 'true' : 'false'}
              aria-describedby={errors.whatsappNumber ? 'whatsapp-error' : undefined}
            />
          </div>
          <AnimatePresence>
            {errors.whatsappNumber && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                id="whatsapp-error"
                className="mt-1 text-xs text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.whatsappNumber}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Monthly Electricity Bill with Currency Icon */}
        <div>
          <label
            htmlFor="monthlyBill"
            className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1.5"
          >
            Monthly Electricity Bill <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-[#637083] pointer-events-none">
              <IndianRupee className="w-4 h-4 text-[#F5B82E]" />
            </span>
            <select
              id="monthlyBill"
              name="monthlyBill"
              required
              disabled={isSubmitting}
              value={formData.monthlyBill}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm text-[#172B45] bg-[#F6F9FC] border transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#1557A6]/20 appearance-none cursor-pointer ${
                errors.monthlyBill
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-[#E3EAF2] focus:border-[#1557A6]'
              }`}
              aria-invalid={errors.monthlyBill ? 'true' : 'false'}
              aria-describedby={errors.monthlyBill ? 'bill-error' : undefined}
            >
              <option value="" disabled>
                Select average monthly bill
              </option>
              <option value="Less than ₹1,500">Less than ₹1,500</option>
              <option value="₹1,500–₹3,000">₹1,500–₹3,000</option>
              <option value="₹3,000–₹5,000">₹3,000–₹5,000</option>
              <option value="More than ₹5,000">More than ₹5,000</option>
            </select>
          </div>
          <AnimatePresence>
            {errors.monthlyBill && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                id="bill-error"
                className="mt-1 text-xs text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.monthlyBill}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Pincode with MapPin Icon */}
        <div>
          <label
            htmlFor="pincode"
            className="block text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-1.5"
          >
            Pincode <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-[#637083] pointer-events-none">
              <MapPin className="w-4 h-4 text-[#1557A6]" />
            </span>
            <input
              type="text"
              id="pincode"
              name="pincode"
              autoComplete="postal-code"
              required
              disabled={isSubmitting}
              maxLength={6}
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="e.g., 474001"
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm text-[#172B45] bg-[#F6F9FC] border transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#1557A6]/20 font-mono ${
                errors.pincode
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-[#E3EAF2] focus:border-[#1557A6]'
              }`}
              aria-invalid={errors.pincode ? 'true' : 'false'}
              aria-describedby={errors.pincode ? 'pincode-error' : undefined}
            />
          </div>
          <AnimatePresence>
            {errors.pincode && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                id="pincode-error"
                className="mt-1 text-xs text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.pincode}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button with Motion Press Feedback */}
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#1557A6] hover:bg-[#104687] transition-all shadow-md shadow-[#1557A6]/25 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#F5B82E]" />
                <span>Scheduling Consultation...</span>
              </>
            ) : (
              <>
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#F5B82E] transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </div>

        {/* Demo Mode & Privacy Note */}
        <p className="text-[11px] text-center text-[#637083] leading-tight pt-1">
          🔒 No spam. Consultation details are used solely to assess solar viability in Gwalior.
          <span className="block text-[10px] text-[#637083]/80 mt-1">
            (Frontend Demo Mode: Active)
          </span>
        </p>
      </form>
    </div>
  );
};
