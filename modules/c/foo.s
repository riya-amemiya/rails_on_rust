	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 11, 0	sdk_version 11, 3
	.globl	_foo                            ## -- Begin function foo
	.p2align	4, 0x90
_foo:                                   ## @foo
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	movl	%edi, -4(%rbp)
	movl	%esi, -8(%rbp)
	movl	%edx, -12(%rbp)
	movl	-12(%rbp), %eax
	shll	$0, %eax
	movl	-4(%rbp), %ecx
	shll	$1, %ecx
	movl	-12(%rbp), %edx
	subl	$1, %edx
	imull	-8(%rbp), %edx
	addl	%edx, %ecx
	imull	%ecx, %eax
	cltd
	movl	$2, %ecx
	idivl	%ecx
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
.subsections_via_symbols
