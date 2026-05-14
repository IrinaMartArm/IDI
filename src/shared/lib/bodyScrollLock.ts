let lockCount = 0;

function getBody() {
  if (typeof document === "undefined") {
    return null;
  }

  return document.body;
}

export function lockBodyScroll() {
  const body = getBody();
  if (!body) {
    return;
  }

  lockCount += 1;
  body.classList.add("menu-open");
}

export function unlockBodyScroll() {
  const body = getBody();
  if (!body) {
    return;
  }

  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    body.classList.remove("menu-open");
  }
}

export function resetBodyScrollLock() {
  const body = getBody();
  if (!body) {
    return;
  }

  lockCount = 0;
  body.classList.remove("menu-open");
}
