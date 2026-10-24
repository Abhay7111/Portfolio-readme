export function mouseHoverController(element) {
  let pointerX = 0;
  let pointerY = 0;
  let currentX = 0;
  let currentY = 0;
  let frameId = null;
  let isActive = false;
  let hasPosition = false;

  function hidePointer() {
    isActive = false;
    element.style.width = "0px";
    element.style.height = "0px";
    element.style.opacity = "0";
  }

  function animatePointer() {
    frameId = null;

    if (!isActive) {
      return;
    }

    currentX += (pointerX - currentX) * 0.18;
    currentY += (pointerY - currentY) * 0.18;

    if (Math.abs(pointerX - currentX) < 0.1 && Math.abs(pointerY - currentY) < 0.1) {
      currentX = pointerX;
      currentY = pointerY;
    } else {
      frameId = window.requestAnimationFrame(animatePointer);
    }

    element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
  }

  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") {
      return;
    }

    pointerX = event.clientX;
    pointerY = event.clientY;

    if (event.target instanceof Element && event.target.closest("a")) {
      hidePointer();
      return;
    }

    isActive = true;
    element.style.width = "20px";
    element.style.height = "20px";
    element.style.opacity = "1";

    if (!hasPosition) {
      currentX = pointerX;
      currentY = pointerY;
      hasPosition = true;
    }

    if (frameId === null) {
      frameId = window.requestAnimationFrame(animatePointer);
    }
  }

  function handlePointerLeave() {
    hidePointer();
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      hidePointer();
    }
  }

  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  window.addEventListener("pointerleave", handlePointerLeave);
  window.addEventListener("blur", handlePointerLeave);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  return () => {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerleave", handlePointerLeave);
    window.removeEventListener("blur", handlePointerLeave);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    hidePointer();

    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }
  };
}
