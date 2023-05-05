import { useEffect, useRef } from "react";
import UIkit from "uikit";

export interface IParams {
  open: boolean;
  onClose?: () => void;
}

export const useLogic = (params: IParams) => {
  const { open, onClose } = params;

  const modalRef = useRef(null);

  const hideButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      var modal = UIkit.modal(modalRef.current);

      if (open) modal?.show();

      if (!open) modal?.hide();
    }
  }, [open, modalRef]);

  useEffect(() => {
    if (onClose) {
      hideButtonRef.current?.addEventListener("click", onClose);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => hideButtonRef.current?.removeEventListener("click", onClose);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideButtonRef]);

  return { modalRef, hideButtonRef };
};
