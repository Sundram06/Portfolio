import { useState } from "react";
import {
	Box,
	Container,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	Stack,
	IconButton,
	Alert,
	Snackbar,
	CircularProgress,
	alpha,
} from "@mui/material";
import {
	Email,
	LinkedIn,
	GitHub,
	Send,
	ContentCopy,
	Check,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SECTION_IDS, fadeInUp } from "../../core/constants";
import { profile } from "../../content/profile";

const schema = yup.object({
	name: yup
		.string()
		.required("Name is required")
		.min(2, "Name must be at least 2 characters"),
	email: yup
		.string()
		.required("Email is required")
		.email("Invalid email address"),
	message: yup
		.string()
		.required("Message is required")
		.min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [emailCopied, setEmailCopied] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log("Form data:", data);
			setSubmitStatus({
				type: "success",
				message: "Message sent successfully! I'll get back to you soon.",
			});
			reset();
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message: "Failed to send message. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(profile.email);
		setEmailCopied(true);
		setTimeout(() => setEmailCopied(false), 2000);
	};

	return (
		<Box
			id={SECTION_IDS.CONTACT}
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				background: (theme) =>
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)"
						: "linear-gradient(180deg, #1a1d23 0%, #0f1419 100%)",
			}}
		>
			<Container maxWidth="lg">
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
				>
					<Typography
						variant="h2"
						sx={{
							mb: 1,
							fontWeight: 700,
							textAlign: "center",
							background:
								"linear-gradient(45deg, #2D3436 30%, #0984E3 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Get In Touch
					</Typography>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ mb: 8, textAlign: "center" }}
					>
						Let's work together on your next project
					</Typography>
				</motion.div>

				<Box sx={{ maxWidth: 1100, mx: "auto" }}>
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={fadeInUp}
					>
						<Paper
							sx={{
								p: { xs: 3, md: 5 },
								borderRadius: 4,
								boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
							}}
						>
							<Grid container spacing={5}>
								{/* Left: Contact Form */}
								<Grid item xs={12} md={7}>
									<Box
										component="form"
										onSubmit={handleSubmit(onSubmit)}
									>
										<Typography
											variant="h5"
											fontWeight={700}
											sx={{ mb: 3 }}
										>
											Send Me a Message
										</Typography>

										<Stack spacing={2.5}>
											<TextField
												fullWidth
												placeholder="Your Name"
												{...register("name")}
												error={!!errors.name}
												helperText={errors.name?.message}
												disabled={isSubmitting}
											/>

											<TextField
												fullWidth
												placeholder="Your Email"
												type="email"
												{...register("email")}
												error={!!errors.email}
												helperText={errors.email?.message}
												disabled={isSubmitting}
											/>

											<TextField
												fullWidth
												placeholder="Your Message"
												multiline
												rows={5}
												{...register("message")}
												error={!!errors.message}
												helperText={errors.message?.message}
												disabled={isSubmitting}
											/>

											<Button
												type="submit"
												variant="contained"
												size="large"
												fullWidth
												disabled={isSubmitting}
												endIcon={
													isSubmitting ? (
														<CircularProgress
															size={20}
															color="inherit"
														/>
													) : (
														<Send />
													)
												}
												sx={{
													background:
														"linear-gradient(90deg, #0984E3 0%, #00B894 100%)",
													color: "white",
													py: 1.5,
													fontSize: "1rem",
													fontWeight: 600,
													textTransform: "none",
													"&:hover": {
														background:
															"linear-gradient(90deg, #0984E3 20%, #00B894 120%)",
														boxShadow:
															"0 8px 24px rgba(9, 132, 227, 0.3)",
													},
													"&:disabled": {
														background: "rgba(0,0,0,0.12)",
													},
												}}
											>
												{isSubmitting ? "Sending..." : "Send Message"}
											</Button>
										</Stack>
									</Box>
								</Grid>

								{/* Right: Contact Info */}
								<Grid item xs={12} md={5}>
									<Stack spacing={3}>
										<Typography
											variant="h5"
											fontWeight={700}
											sx={{ mb: 0 }}
										>
											Contact Information
										</Typography>

										{/* Email Card */}
										<Paper
											sx={{
												p: 2.5,
												borderRadius: 2,
												background: (theme) =>
													alpha(theme.palette.primary.main, 0.08),
												border: "none",
											}}
										>
											<Stack spacing={1}>
												<Stack
													direction="row"
													alignItems="center"
													spacing={1}
													sx={{ mb: 0.5 }}
												>
													<Box
														sx={{
															width: 36,
															height: 36,
															borderRadius: 1.5,
															background:
																"linear-gradient(135deg, #0984E3 0%, #00B894 100%)",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
														}}
													>
														<Email
															sx={{
																color: "white",
																fontSize: 18,
															}}
														/>
													</Box>
													<Typography
														variant="overline"
														fontWeight={600}
														color="text.secondary"
														sx={{ fontSize: "0.75rem" }}
													>
														Email Address
													</Typography>
												</Stack>
												<Stack
													direction="row"
													alignItems="center"
													justifyContent="space-between"
												>
													<Typography
														variant="body1"
														fontWeight={600}
													>
														{profile.email}
													</Typography>
													<IconButton
														onClick={handleCopyEmail}
														size="small"
														sx={{
															color: emailCopied
																? "success.main"
																: "text.secondary",
														}}
													>
														{emailCopied ? (
															<Check fontSize="small" />
														) : (
															<ContentCopy fontSize="small" />
														)}
													</IconButton>
												</Stack>
											</Stack>
										</Paper>

										{/* Social Links */}
										<Box>
											<Typography
												variant="overline"
												fontWeight={600}
												color="text.secondary"
												sx={{ mb: 1.5, display: "block", fontSize: "0.75rem" }}
											>
												Connect on Social
											</Typography>
											<Grid container spacing={1.5}>
												<Grid item xs={6}>
													<Button
														href={profile.links.linkedin}
														target="_blank"
														rel="noopener noreferrer"
														startIcon={<LinkedIn />}
														fullWidth
														variant="outlined"
														sx={{
															py: 1.25,
															height: 44,
															borderWidth: 2,
															textTransform: "none",
															fontWeight: 600,
															minWidth: 120,
															"&:hover": {
																borderWidth: 2,
																transform: "translateY(-2px)",
															},
															transition: "all 0.3s ease",
														}}
													>
														LinkedIn
													</Button>
												</Grid>
												<Grid item xs={6}>
													<Button
														href={profile.links.github}
														target="_blank"
														rel="noopener noreferrer"
														startIcon={<GitHub />}
														fullWidth
														variant="outlined"
														sx={{
															py: 1.25,
															height: 44,
															borderWidth: 2,
															textTransform: "none",
															fontWeight: 600,
															minWidth: 120,
															"&:hover": {
																borderWidth: 2,
																transform: "translateY(-2px)",
															},
															transition: "all 0.3s ease",
														}}
													>
														GitHub
													</Button>
												</Grid>
												<Grid item xs={6}>
													<Button
														href="https://leetcode.com/"
														target="_blank"
														rel="noopener noreferrer"
														startIcon={
															<Box
																component="span"
																sx={{
																	fontSize: "1.2rem",
																	fontWeight: 700,
																}}
															>
																{"</>"}
															</Box>
														}
														fullWidth
														variant="outlined"
														sx={{
															py: 1.25,
															height: 44,
															borderWidth: 2,
															textTransform: "none",
															fontWeight: 600,
															minWidth: 120,
															"&:hover": {
																borderWidth: 2,
																transform: "translateY(-2px)",
															},
															transition: "all 0.3s ease",
														}}
													>
														LeetCode
													</Button>
												</Grid>
												<Grid item xs={6}>
													<Button
														href="https://twitter.com/"
														target="_blank"
														rel="noopener noreferrer"
														startIcon={
															<Box
																component="span"
																sx={{
																	fontSize: "1.1rem",
																	fontWeight: 700,
																}}
															>
																𝕏
															</Box>
														}
														fullWidth
														variant="outlined"
														sx={{
															py: 1.25,
															height: 44,
															borderWidth: 2,
															textTransform: "none",
															fontWeight: 600,
															minWidth: 120,
															"&:hover": {
																borderWidth: 2,
																transform: "translateY(-2px)",
															},
															transition: "all 0.3s ease",
														}}
													>
														X (Twitter)
													</Button>
												</Grid>
											</Grid>
										</Box>

										{/* Availability */}
										<Paper
											sx={{
												p: 2.5,
												borderRadius: 2,
												background: (theme) =>
													alpha(theme.palette.success.main, 0.12),
												border: "none",
											}}
										>
											<Stack
												direction="row"
												alignItems="center"
												spacing={1.5}
											>
												<Box
													sx={{
														width: 10,
														height: 10,
														borderRadius: "50%",
														bgcolor: "success.main",
														flexShrink: 0,
													}}
												/>
												<Box>
													<Typography
														variant="body2"
														fontWeight={600}
														sx={{ mb: 0.25 }}
													>
														Available for opportunities
													</Typography>
													<Typography
														variant="caption"
														color="text.secondary"
													>
														Open to freelance & full-time roles
													</Typography>
												</Box>
											</Stack>
										</Paper>
									</Stack>
								</Grid>
							</Grid>
						</Paper>
					</motion.div>
				</Box>
			</Container>

			<Snackbar
				open={!!submitStatus}
				autoHideDuration={6000}
				onClose={() => setSubmitStatus(null)}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => setSubmitStatus(null)}
					severity={submitStatus?.type}
					sx={{ width: "100%" }}
				>
					{submitStatus?.message}
				</Alert>
			</Snackbar>
		</Box>
	);
}
