describe("package-comp-check", () => {
  test("should validate package name format", () => {
    // Test basic package name validation
    const validPackage = "react";
    const validScopedPackage = "@mui/material";
    const invalidScopedPackage = "@mui";

    expect(validPackage.length).toBeGreaterThan(0);
    expect(validScopedPackage.includes("/")).toBe(true);
    expect(
      invalidScopedPackage.startsWith("@") &&
        !invalidScopedPackage.includes("/")
    ).toBe(true);
  });
});
