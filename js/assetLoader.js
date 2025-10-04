/**
 * Initialize the resource loader once the DOM is ready.
 *
 * This function:
 * - Finds the requested page element whose id starts with "requestedPageName_"
 * - Extracts its value (page name)
 * - Calls `resourceLoader` to load common resources + page-specific resources
 */
function initResourceLoader() {
  try {
    var element = document.querySelector("[id^='requestedPageName_']");
    if (element) {
      var resourcePageName = element.value;
      console.log("Found requested page:", resourcePageName);

      resourceLoader(["common", resourcePageName]);
    }
  } catch (err) {
    console.error("Resource loader init failed:", err.message);
  }
}

/**
 * Dynamically loads CSS and JS resources for given pages
 * based on the configuration provided in assetsConfiguration.json.
 *
 * Features:
 * - Supports both single string and array of page names
 * - Reads configuration JSON synchronously (blocking request)
 * - Loads only missing CSS/JS to avoid duplicate requests
 * - Supports both flat and nested `pages` structures in JSON
 *
 * @param {string|string[]} pageNames - Page name(s) whose assets should be loaded.
 */
function resourceLoader(pageNames) {
  try {
    console.log("🚀 resourceLoader init:", pageNames);

    // Load JSON synchronously using XMLHttpRequest (no async/await)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Configuration/assets/assetsConfiguration.json", false); // false = synchronous
    xhr.send();

    if (xhr.status === 200) {
      var assets = JSON.parse(xhr.responseText);
      var head = document.head;

      console.log("✅ Asset config loaded");

      // Normalize single string into an array
      var pages = Array.isArray(pageNames) ? pageNames : [pageNames];

      // Process each requested page
      for (var i = 0; i < pages.length; i++) {
        var pageName = pages[i];

        // Support both flat and nested "pages" object structures
        var currentPage =
          assets[pageName] || (assets.pages ? assets.pages[pageName] : null);
        if (!currentPage) {
          console.warn("⚠️ No assets found for page:", pageName);
          continue;
        }

        // Load CSS & JS assets
        loadCSS(currentPage.css || [], head);
        loadJS(currentPage.js || [], document.body);
      }
    } else {
      console.error(
        "❌ Failed to load assetsConfiguration.json. Status:",
        xhr.status
      );
    }
  } catch (error) {
    console.error("❌ Error loading assets:", error);
  }
}

/**
 * Loads CSS files dynamically into <head>, avoiding duplicates.
 *
 * Behavior:
 * - Skips loading if the CSS file is already included
 * - Appends a new <link> element for each missing stylesheet
 *
 * @param {string[]} cssList - Array of CSS file paths.
 * @param {HTMLElement} head - The <head> element to append <link> tags to.
 */
function loadCSS(cssList, head) {
  cssList.forEach(function (href) {
    if (!href) return;

    // Skip if already loaded
    if (document.querySelector('link[href="' + href + '"]')) {
      console.log("⏭️ CSS already loaded:", href);
      return;
    }

    // Inject stylesheet
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    head.appendChild(link);
    console.log("🎨 CSS loaded:", href);
  });
}

/**
 * Loads JavaScript files dynamically into the document,
 * while preventing duplicate loads.
 *
 * Supports:
 * - String paths (e.g., "script.js")
 * - Object entries with { src: "path.js", type: "module" }
 *
 * Behavior:
 * - Skips scripts that are already loaded
 * - Appends <script> tags to the given container (usually <body>)
 * - Logs success or error for each script
 *
 * @param {(string|Object)[]} jsList - Array of JS file paths or objects.
 * @param {HTMLElement} container - The element (usually <body>) where scripts will be injected.
 */
function loadJS(jsList, container) {
  console.log("📜 Loading JS:", jsList);

  jsList.forEach(function (entry) {
    if (!entry) return;

    var src;
    var type = "text/javascript";

    // Handle string or object entry
    if (typeof entry === "string") {
      src = entry;
    } else if (typeof entry === "object" && entry.src) {
      src = entry.src;
      type = entry.type === "module" ? "module" : "text/javascript";
    } else {
      console.warn("⚠️ Unknown JS format:", entry);
      return;
    }

    // Skip if already loaded
    if (document.querySelector('script[src="' + src + '"]')) {
      console.log("⏭️ JS already loaded:", src);
      return;
    }

    // Dynamically inject script
    var script = document.createElement("script");
    script.src = src;
    script.type = type;

    script.onload = function () {
      console.log("✅ JS loaded:", src);
    };
    script.onerror = function () {
      console.error("❌ Failed to load script:", src);
    };

    container.appendChild(script);
  });
}

/**
 * Ensure the resource loader runs once the DOM is ready.
 * - If DOM is still loading, attach to DOMContentLoaded
 * - Otherwise, run immediately
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initResourceLoader);
} else {
  initResourceLoader();
}
